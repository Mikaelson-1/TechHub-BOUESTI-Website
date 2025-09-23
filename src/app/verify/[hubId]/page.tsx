export default function VerifyPage({ params }: { params: { hubId: string } }) {
  const hubId = decodeURIComponent(params.hubId);
  // TODO: fetch status from database; for now, mock as Active
  return (
    <main className="container mx-auto px-4 py-16 max-w-xl">
      <h1 className="text-2xl font-bold mb-2">Membership Verification</h1>
      <p className="text-gray-700">Hub ID: {hubId}</p>
      <p className="mt-2 font-medium text-green-600">Status: Active</p>
    </main>
  );
}
