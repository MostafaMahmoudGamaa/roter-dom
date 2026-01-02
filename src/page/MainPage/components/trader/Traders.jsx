
import { useParams } from "react-router-dom";
import { useTrader } from "../../../../hoks/useStock";
import AppLoader from "../../../../AppLoader/AppLoader";
import TradersContainer from "./traderCombonent/TradersContainer";
import TraderSummarySection from "./traderCombonent/TraderSummarySection";
import TraderLogsSection from "./traderCombonent/TraderLogsSection";

export default function Traders() {
  const { name } = useParams();
  const { data: trData, isLoading: traderLoading } = useTrader(name);

  // حالة التحميل
  if (traderLoading) {
    return <AppLoader />;
  }

  // حالة عدم وجود بيانات
  if (!trData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
            ⚠️ خطأ في تحميل البيانات
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            لا يمكن تحميل بيانات التاجر {name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <TradersContainer name={name}>
      <TraderSummarySection 
        traderData={trData} 
        loading={traderLoading} 
      />
      
      <TraderLogsSection 
        traderData={trData} 
        loading={traderLoading}
        traderName={name}
      />
    </TradersContainer>
  );
}