import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBoxes,
  FaTruck,
  FaMoneyBillWave,
  FaCube,
} from "react-icons/fa";

export default function TraderCard({ trader, index }) {
  return (
    <Link to={`trader/${trader.id}`} className="block focus:outline-none">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
        {/* الرأس */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
              <FaUser className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {trader.id}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                التاجر #{index + 1}
              </p>
            </div>
          </div>
          <div className="text-xs px-2 py-1 bg-blue-100 dark:bg-gray-500 text-blue-800 dark:text-blue-50 rounded-full">
            عرض التفاصيل
          </div>
        </div>

        {/* نظرة سريعة */}
   
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-green-50 dark:bg-gray-700 rounded-lg">
            <FaBoxes className="text-green-600 dark:text-gray-400 mx-auto mb-1" />
            <p className="text-xs text-gray-600 dark:text-gray-300">المليان</p>
            <p className="font-bold text-gray-900 dark:text-white">
              {trader.traderMlian ?? "0"}
            </p>
          </div>

          <div className="text-center p-2 bg-blue-50 dark:bg-gray-700 rounded-lg">
            <FaTruck className="text-blue-600 dark:text-gray-400 mx-auto mb-1" />
            <p className="text-xs text-gray-600 dark:text-gray-300">الفاضي</p>
            <p className="font-bold text-gray-900 dark:text-white">
              {trader.traderFadi ?? "0"}
            </p>
          </div>

          <div className="text-center p-2 bg-yellow-50 dark:bg-gray-700 rounded-lg">
            <FaMoneyBillWave className="text-yellow-600 dark:text-gray-400 mx-auto mb-1" />
            <p className="text-xs text-gray-600 dark:text-gray-300">الفلوس</p>
            <p className="font-bold text-gray-900 dark:text-white">
              {trader.traderMoney ?? "0"}
            </p>
          </div>
        </div>

        {/* ملاحظة */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            انقر لعرض جميع التفاصيل والإحصائيات
          </p>
        </div>
      </div>
    </Link>
  );
}
