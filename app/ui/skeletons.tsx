export function LeaderboardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden liquid-glass">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-10 py-5">
              <div className="bg-white/20 mx-auto rounded-md w-24 h-8 animate-pulse" />
            </th>
            <th className="px-10 py-5">
              <div className="bg-white/20 mx-auto rounded-md w-24 h-8 animate-pulse" />
            </th>
            <th className="px-10 py-5">
              <div className="bg-white/20 mx-auto rounded-md w-24 h-8 animate-pulse" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 15 }).map((_, index) => (
            <tr key={index}>
              <td className="px-5 py-2 text-center">
                <div className="bg-white/20 mx-auto rounded-md w-8 h-6 animate-pulse" />
              </td>
              <td className="px-5 py-2 text-center">
                <div className="bg-white/20 mx-auto rounded-md w-32 h-6 animate-pulse" />
              </td>
              <td className="px-5 py-2 text-center">
                <div className="bg-white/20 mx-auto rounded-md w-16 h-6 animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="pb-5" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
