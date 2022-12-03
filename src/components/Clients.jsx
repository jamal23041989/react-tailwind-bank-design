import { clients } from '../constants'

export const Clients = () => {
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map(client => (
          <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}
