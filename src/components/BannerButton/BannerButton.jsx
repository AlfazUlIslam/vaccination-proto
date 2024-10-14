const BannerButton = ({content}) => {
  return (
    <button className="bg-darkTurquoise rounded-[20px] font-montserrat 
    font-bold text-[14px] text-[#FFF] px-[20px] py-[10px] border-solid 
    border-2 border-darkTurquoise transition-all duration-1000 
    hover:bg-[rgba(255,255,255,0.1)] active:scale-90 md:text-[20px] 
    md:px-[25px] md:py-[20px] xl:text-[24px]">
      {content}
    </button>
  )
}
export default BannerButton
// sm 500
// lg 990