'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function CredentialsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const normalizedEmail = email.toLowerCase();

    try {
      if (mode === 'signup') {
        const { data: existingUser } = await supabase
          .from('userdata')
          .select('email')
          .eq('email', normalizedEmail)
          .single();

        if (existingUser) {
          throw new Error('User already exists. Please sign in instead.');
        }

        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (signUpError) throw signUpError;

        if (authData.user) {
          const { error: insertError } = await supabase
            .from('userdata')
            .insert([
              {
                user_id: authData.user.id,
                email: normalizedEmail,
              },
            ]);

          if (insertError) throw insertError;
        }

        // Show success message for signup
        setError('Please check your email to confirm your account.');
        return;
      } else {
        // Sign in
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

        if (signInError) throw signInError;

        // Redirect on successful sign in
        router.push('/inputproposal');
        router.refresh();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Auth error:', err);
      } else {
        console.error('An unknown error occurred:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
          <Image 
            src="/images/your-image-file-name.png" 
            alt="ProposalForge Logo" 
            width={257} 
            height={48} 
            className="h-48" 
          />
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-black text-center mb-8">
            {mode === 'signin' ? 'Welcome Back' : 'Join Us'}
          </h1>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleAuth} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-blue-500 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium text-blue-500 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
              >
                {isLoading ? 'Processing...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                  className="text-blue-500 underline"
                >
                  {mode === 'signin'
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
