    function PageTitle({title, subtitle}){
        return(
            <div className="mb-6">
          <h1 className="text-[#020143] text-2xl font-medium">
            {title}
          </h1>
          <p className="text-[#020143] text-sm">
            {subtitle}
          </p>
        </div>

        );
    }
    
    export default PageTitle;
    