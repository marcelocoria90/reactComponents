import EjemploCard from "./components/EjemploCard"
import EmailManager from "./components/EmailManager"


const AgendarCertificadoPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>AgendarCertificadoPage</div>
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        <EmailManager />
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        <EjemploCard />
      </div>
    </>
  )
}


export default AgendarCertificadoPage