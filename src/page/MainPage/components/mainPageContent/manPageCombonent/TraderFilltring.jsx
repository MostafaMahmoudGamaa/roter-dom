import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TraderCard from "./TraderCard";

export default function TraderFilltring({ traders }) {
  const [searchQuery, setSearchQuery]= useState("")
  const [selectedFilter, setSelectedFillter] = useState({
    hasFadi: false,
    hasMlian: false,
  });

  const fillteredTraders = useMemo(() => {
    return traders.filter((trader) => {
      const searchFilter = trader.id.toLowerCase().includes(searchQuery.toLowerCase())

      const matshFilter =
        (!selectedFilter.hasFadi || trader.totalHadid > 0) &&
        (!selectedFilter.hasMlian || trader.traderMlian > 0);
      return matshFilter && searchFilter;
    });
  }, [selectedFilter, searchQuery, traders]);

  const toggleFilter = (fillterName) => {
    setSelectedFillter((prev) => ({
      ...prev,
      [fillterName]: !prev[fillterName],
    }));
  };
  const totalTraders = traders.length
  const filterCount = fillteredTraders.length
  
  return (
    <>
     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mb-6 border border-gray-200 dark:border-gray-700">
  
  {/* العنوان */}
  <div className="text-center mb-5">
    <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      🔍 البحث عن التجار
    </h1>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      ابحث عن التاجر المطلوب وقم بتصفية النتائج
    </p>
  </div>

  {/* شريط البحث */}
  <div className="mb-5">
    <div className="relative">
      <input
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        placeholder="ابحث عن التاجر..."
        type="text"
        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
        dir="rtl"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  </div>
  
    <h1 className="text-gray-600 dark:text-gray-400 text-sm p-2">
      {filterCount === totalTraders ? `جميع التجار (${ filterCount})`: `التجار المطابقين للمواصفات (${filterCount})`}
    </h1>
  

  {/* أزرار الفلترة */}
  <div className="flex gap-3">
    <button
      onClick={() => toggleFilter("hasFadi")}
      className={`flex-1 py-2.5 rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 ${
        selectedFilter.hasFadi
          ? "bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-500 text-white"
          : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      <span>🚚 لديه فاضي</span>
      {selectedFilter.hasFadi && <span className="text-xs">✓</span>}
    </button>

    <button
      onClick={() => toggleFilter("hasMlian")}
      className={`flex-1 py-2.5 rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 ${
        selectedFilter.hasMlian
          ? "bg-blue-500 dark:bg-blue-600 border-blue-600 dark:border-blue-500 text-white"
          : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      <span>📦 لديه مليان</span>
      {selectedFilter.hasMlian && <span className="text-xs">✓</span>}
    </button>
  </div>


</div>



{filterCount > 0 ? (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {fillteredTraders?.map((trader, i) => (
          <TraderCard trader={trader} index={i} key={trader.id} />
        ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            لا توجد نتائج مطابقة
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            لم نعثر على تجار يطابقون معايير البحث
          </p>
       
        </div>
      )}

      
     
    </>
  );
}
