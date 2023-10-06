import { Outlet } from "react-router-dom"
import PageFooter from "../components/PageFooter"
import PageHeader from "../components/PageHeader"

const BaseLayout = () => {
  return (
    <div>
        <PageHeader />

        <main className="min-h-screen">
            <Outlet />
        </main>

        <PageFooter />
    </div>
  )
}

export default BaseLayout