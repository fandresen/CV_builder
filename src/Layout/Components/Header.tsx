
export default function Header() {
  return (
    <div className="flex justify-between w-full px-[5vw] pt-7">
        <div className="flex">
        <div>Logo</div>
        <div>
            <h1 className="text-2xl">Create, Custom and Shine</h1>
        </div>
        </div>
        
        <div className="flex justify-around w-[30%]">
         <h1 className="text-3xl font-semibold text-[#14E79D]">Templates</h1>
          <button className="text-3xl text-white p-5 bg-[#FC6730] rounded-xl font-medium -mt-3">Create CV</button>
        </div>
    </div>
  )
}
