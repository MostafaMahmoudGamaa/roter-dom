import React from "react";
import LogContainer from "./LogContainer";
import { useGetStockLogs } from "../../../../hoks/useStock";
import AppLoader from "../../../../AppLoader/AppLoader";

export default function StockLogs() {
  const { data: stockLog, isLoading: stockLoading } = useGetStockLogs();

  if (stockLoading) return <AppLoader />;

  const logData = stockLog.map((log, i) => {
    return {
      before: {
        mlian: log?.before_available_mlian,
        fadi: log?.before_available_fadi,
        money: log?.before_available_money,
        solid: log?.before_sold_mlian,
        totalMoney: log?.before_totalMoney,
        tradersMoney: log?.before_traders_money,
      },
      trader: {
        mlian: log?.traderMlian,
        fadi: log?.traderFadi,
        money: log?.traderMoney,
        traderName: log?.traderName,
      },
      after: {
        mlian: log?.after_available_mlian,
        fadi: log?.after_available_fadi,
        money: log?.after_available_money,
        solid: log?.after_sold_mlian,
        totalMoney: log?.after_totalMoney,
        tradersMoney: log?.after_traders_money,
      },
      time: log?.waqt,
    };
  });

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">سجل التغييرات</h1>
      <LogContainer logs={logData} />
    </div>
  );
}
