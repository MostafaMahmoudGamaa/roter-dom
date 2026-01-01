import {FaBoxOpen, FaDollarSign, FaUsers, FaTruck,  FaMoneyBillWave,} from "react-icons/fa";
import DaySummaryCards from "./detilseComponents/DaySummaryCards";
import Section from "./detilseComponents/Section";
import { useStock } from "../../../../hoks/useStock";
import TraderCard from "./detilseComponents/TraderCard";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AnalyticsDataCards() {
  const [traderID, setTraderID]=useState(null)

  const {
    data: stock,
    isFetching,
    isLoading: stockLoading,
    invalidData,
  } = useStock();

  const toggle = (id)=> setTraderID(traderID === id ? null : id)

  const cardData = [
    {
      label: "المليان المتوفر",
      value: stock?.stockData?.available_mlian,
      icon: <FaBoxOpen className="text-green-500" />,
      color: "green",
      border: "border-l-4 border-green-500"
    },
    {
      label: "المليان المباع",
      value: stock?.stockData?.sold_mlian?? 0,
      icon: <FaBoxOpen className="text-red-500" />,
      color: "red",
      border: "border-l-4 border-red-500"
    },
    {
      label: "الفرداني المباع",
      value: 15,
      icon: <FaUsers className="text-yellow-500" />,
      color: "yellow",
      border: "border-l-4 border-yellow-500"
    },
    {
      label: "الفاضي المستلم",
      value: stock?.stockData?.available_fadi,
      icon: <FaTruck className="text-blue-500" />,
      color: "blue",
      border: "border-l-4  border-blue-500"
    },
    {
      label: "الفاضي اللي برا",
      value: 12,
      icon: <FaTruck className="text-purple-500" />,
      color: "purple",
      border: "border-l-4  border-purple-500"
    },
    {
      label: "الفلوس المستلمة",
      value: stock?.stockData?.available_money,
      icon: <FaDollarSign className="text-indigo-500" />,
      color: "indigo",
      border: "border-l-4 border-indigo-500"
    },
    {
      label: "الفلوس عند التجار",
      value: stock?.stockData?.traders_money?? 0,
      icon: <FaMoneyBillWave className="text-pink-500" />,
      color: "pink",
      border: "border-l-4 border-pink-500"
    },
  ];

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900 min-h-screen ">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-right">
        تحليل بيانات اليوم
      </h1>
     

      <Section title={"بينات النقله"} >
        {cardData.map((detilse, i) => (
          <Link key={i} to={"/home/log"}>
          <DaySummaryCards
            label={detilse.label}
            value={detilse.value}
            icon={detilse.icon}
            color={detilse.color}
            border={detilse.border}
          />
          </Link>
        ))}
        
        </Section>

      <Section title={"التجار"}>
        {stock?.traders.length > 0 && stock.traders.map((trader)=>(
          <TraderCard
          key={trader.waqt}
          traderName={trader.id}
          traderMlian={trader.traderMlian}
          traderFadi={trader.traderFadi}
          traderHadid={trader.totalHadid}
          traderMoney={trader.traderMoney}
          toggle={toggle}
          selectedID={traderID}
          />
        ))}

      </Section>
  

    </div>
  );
}
