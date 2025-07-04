import QuoteForm from '../components/QuoteForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Motivational Quote Generator</h1>
      <QuoteForm />
    </main>
  );
}
