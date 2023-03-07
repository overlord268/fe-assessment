import Head from 'next/head';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sold.com Difference</title>
        <meta name="description" content="Supercharge your productivity with our app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <div className="bg-[#25282A] py-8 px-4 pb-96 lg:pb-40 ">
          <div className='flex flex-wrap justify-around'>
            <div>
              <h1 className="font-bold text-2xl text-white">
                Sold.com Difference
              </h1>
              <p className="text-sm mt-3.5 text-white w-[332px]  ">
                Unlike other lead sources and portals, we don’t focus on worthless metrics like impressions or even leads. SOLD.com shows you how many clients actually cross the finish line and buy or sell a home.   </p>
              <p className="text-sm mt-7 text-white  xl:p-0">
                After all, isn’t that the metric that matters most ? </p>
            </div>
            <div className="bg-white rounded-lg h-[216px] mt-[46.6px] lg:mt-0">
              <p className='text-black font-regular text-sm ml-5 pt-[17px] pr-[17px]'>In your zips over the last 18 months, we’ve originated:</p>
              <div className='flex'>
                <div>
                  <img src='/Icon-48 place holder.svg' className='mt-[20px] ml-[24px]' />
                  <p className='font-bold text-3xl mt-4 ml-6 '>$20M</p>
                  <span className='text-xs ml-6'>in Sales</span>
                </div>
                <div>
                  <img src='/Icon-48 place holder2.svg' className='mt-[20px] ml-[80px]' />
                  <p className='font-bold text-3xl mt-4 ml-20 pr-[17px]'>$500K</p>
                  <span className=' text-xs ml-20 '>in Comissions (est)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4 -mt-96 lg:-mt-28'>
          <div className="bg-white shadow-md rounded-lg  sm:flex p-4 ">
            <div className=''>
              <div className=''>
                <p className=' text-black font-regular text-base mb-4'>Our referrals are routed to the top performing agents in our network. Rankings are based on numerous factors, including:</p>

                <ol className="text-black font-regular text-sm lg:columns-2" >
                  <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Transaction statistics</li>
                  <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Responsiveness</li>
                  <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Customer Satisfaction</li>
                  <li> <em className='text-[#E82418] not-italic font-bold '>+</em> Portal Updates</li>
                </ol>
              </div>
            </div>
            <div className="bg-[#F5F8FA] rounded-lg  mt-[46.6px] p-4 lg:mt-0 ">
              <div className='flex items-center mb-4'>
                <p className='text-black font-bold text-lg lg:w-60 lg:mr-5'>Your average rank in the markets you serve is:</p>
                <p className='text-[#E82418] font-bold text-[34px] lg:mr-auto '>25↓</p>
                <button className='text-white font-bold bg-[#F93822] rounded-lg p-3 hidden lg:block'>Learn More</button>
              </div>
              <div>

                <p className=' text-black font-regular text-sm mb-3'>Your ranking will directly affect the number of referrals you receive. Learn about our <em className='text-[#E82418] not-italic '>Guaranteed Display</em> program to help improve your ranking.</p>
                <button className='text-white font-bold bg-[#F93822] rounded-lg w-full py-3 lg:hidden'>Learn More</button>


              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:items-center'>
          <div className="bg-[#E82418] rounded w-[16px] h-[32px]  ml-7 pl-2"></div>
          <p className=' text-black font-bold text-base pl-2.5  '>Since you joined our network, here’s what we’ve been up to in your zip codes:</p>
        </div>

        <div className='flex flex-wrap mt-9 px-4 gap-4'>
          <div className="bg-white rounded-lg  border-solid border-2 grow ">
            <img src='/icon-leads.svg' className='pt-[42px] pl-[41px]' />
            <h1 className='font-regular text-4xl pl-10 mt-4 '>Opportunity</h1>
            <div className='flex'>
              <p className='font-regular text-base pl-10 mt-12 opacity-100 '>SOLD.com <p>Leads</p></p>
              <p className='text-[#00A3E0] font-bold text-4xl pl-[85px] pt-14'>500</p>
            </div><div className='flex'>
            </div>
            <div className='flex'>
              <p className='font-regular text-base pl-10 mt-12 opacity-100'>Customers that we<p>told about you</p></p>
              <p className='text-[#00A3E0] font-bold text-2xl pl-[40px] pt-14'>100</p>
            </div>
            <div className='flex'>
              <div className="bg-[#00A3E0] rounded w-[55px] h-[4px] ml-10 mt-5  "></div>
              <p className="text-[#00A3E0] font-regular text-xs ml-36 mt-3" >(XX%)</p>
            </div>
            <div className='flex'>
              <p className='font-regular text-base pl-10 pt-7'>Appointments <p>set with you</p></p>
              <p className='text-[#00A3E0] font-bold text-2xl ml-[85px] pt-9'>30</p>
            </div>
          </div>
          <div className="bg-white rounded-lg  border-solid border-2 grow">
            <img src='/icon-happy-face.svg' className='pt-[42px] pl-[41px]' />
            <h1 className='font-regular text-4xl pl-10 mt-4'>Wins</h1>
            <div className='px-8'>
              <div className='flex justify-between'>
                <p className='font-regular text-base  mt-12 w-40'>Your signed agreements</p>
                <p className='text-[#84AE2B] font-bold text-4xl  pt-10 '>15</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-regular text-base  pt-11'>Your closings</p>
                <p className='text-[#84AE2B] font-bold text-2xl pt-10'>10</p>
              </div>
            </div>
            <div className="bg-[#F5F8FA] rounded-lg mt-[46.6px] px-8 text-end lg:pb-4">
              <div className='flex justify-end'>
                <p className='font-regular text-base  pt-11'>Your closed volume<p className='text-[#84AE2B] font-regular text-2xl'>$3,000,000 </p></p>
              </div>
              <div className='flex justify-end'>
                <p className='font-regular text-base  pt-11'>Your comission (est)<p className='text-[#84AE2B] font-regular text-2xl'>$500,00</p></p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg  border-solid border-2 grow">
            <img src='/icon-sad-face.svg' className='pt-[42px] pl-[41px]' />
            <h1 className='font-regular text-4xl pl-10 mt-4'>Losses</h1>
            <div className='px-8'>
              <div className='flex justify-between'>
                <p className='font-regular text-base  mt-12 w-40 lg:w-56'>Appointments that signed with another agent</p>
                <p className='text-[#F93822] font-bold text-4xl  pt-10'>15</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-regular text-base  pt-11'>Lost closings</p>
                <p className='text-[#F93822] font-bold text-2xl  pt-10'>10</p>
              </div>
            </div>
            <div className="bg-[#F5F8FA] rounded-lg mt-[46.6px] px-8 text-end lg:pb-4">
              <div className='flex justify-end'>
                <p className='font-regular text-base pt-11'> Lost volume<p className='text-[#F93822] font-regular text-2xl'>$3,000,000</p></p>
              </div>
              <div className='flex justify-end'>
                <p className='font-regular text-base pt-11'>Lost comission (est)<p className='text-[#F93822] font-regular text-2xl'>$500,00</p></p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex text-center'>
          <p className='text-black font-bold text-xl ml-6 pt-[170px]'>Unsatisfied with these stats? <p>We can help you improve them.</p></p>
        </div>
        <div>
          <button className='text-white font-bold bg-[#F93822] rounded w-[166px] h-[42px] ml-[105px] mt-6 mb-16'>Schedule a call</button>
        </div>
      </main>
    </>
  );
};

export default Home;