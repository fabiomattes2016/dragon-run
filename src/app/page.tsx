import Footer from "../components/footer"
import Main from "../components/main"

export default function Page() {
  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Main */}
        <Main />

        {/* Footer */}
        <Footer />

      </div>
    )
}
