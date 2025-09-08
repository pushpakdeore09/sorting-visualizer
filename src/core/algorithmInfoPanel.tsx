import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store/useStore";
import { algorithmInfo } from "./algorithmInfo";

export default function AlgorithmInfoPanel() {
  const { algorithm } = useStore() as { algorithm: keyof typeof algorithmInfo };
  if (!algorithm) return null;

  const algo = algorithmInfo[algorithm];

  return (
    <Card className="mt-4 w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{algo.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 dark:text-white mb-4 text-sm sm:text-base">
          {algo.description ??
            "This algorithm sorts the array using standard sorting techniques."}
        </p>

        {algo.best && algo.avg && algo.worst && algo.space && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] border border-gray-200 rounded-lg text-sm sm:text-base">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-3 py-2 border-b text-left dark:text-white">Type</th>
                  <th className="px-3 py-2 border-b text-left dark:text-white">
                    Time Complexity
                  </th>
                  <th className="px-3 py-2 border-b text-left dark:text-white">
                    Space Complexity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b dark:text-white">Best</td>
                  <td className="px-3 py-2 border-b">{algo.best}</td>
                  <td className="px-3 py-2 border-b" rowSpan={3}>
                    {algo.space}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b dark:text-white">Average</td>
                  <td className="px-3 py-2 border-b">{algo.avg}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 dark:text-white">Worst</td>
                  <td className="px-3 py-2">{algo.worst}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
