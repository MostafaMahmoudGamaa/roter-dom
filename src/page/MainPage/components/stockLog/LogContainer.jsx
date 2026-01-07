
import React from 'react';
import LogCard from './LogCard';

export default function LogContainer({ logs }) {
  console.log(logs);
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      { logs.length > 0 ?  logs.map((log,i) => (
        <LogCard 
          key={i}
          before={log.before}
          trader={log.trader}
          after={log.after}
          time={log.time}
        />
      )) :       
       <div className="text-center  py-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        لا توجد اي سجلات
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        لم نعثر على اي سجلات لهاذا اليوم
      </p>
    </div>}
    </div>
  );
}
