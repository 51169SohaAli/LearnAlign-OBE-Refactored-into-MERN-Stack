function AnalyticCard({title, count, icon}){
    return(

      <div className="bg-gradient-to-r from-white to-[#f1f3ff] border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl px-6 py-6 cursor-pointer">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-[#020143]">
            {count}
            </h2>
            <i className={`${icon} text-4xl text-[#020143]`}></i>
        </div>
        <div className="mt-4">
          <small className="text-base font-medium text-[#020143]">
            {title}
          </small>
        </div>
      </div>

    );
}

export default AnalyticCard;