const Skeleton = () => {
  return (
    <>
      <div
        role="status"
        className="w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
      >
        <table className="w-full">
          <thead>
            <tr>
              <th className="mb-3 h-7 w-full rounded bg-gray-300 dark:bg-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="pt-4">
                <td className="mt-5 flex items-center justify-between gap-5">
                  <div className="mb-2.5 h-4 w-10 rounded bg-gray-300 dark:bg-gray-600 md:w-12 lg:w-24"></div>
                  <div className="h-4 w-10 rounded bg-gray-200 dark:bg-gray-700 md:w-12 lg:w-32"></div>
                  <div className="h-4 w-10 rounded bg-gray-200 dark:bg-gray-700 md:w-12 lg:w-32"></div>
                  <div className="mb-2.5 h-4 w-10 rounded bg-gray-300 dark:bg-gray-600 md:w-12 lg:w-24"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Skeleton;
