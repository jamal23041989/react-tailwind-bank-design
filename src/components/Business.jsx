import { features } from '../constants'
import { Button } from './Button'

export const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
          >
            <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
              <img src={feature.icon} alt="star" className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{feature.title}</h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
