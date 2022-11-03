import Banner from "components/Banner/Banner";
import Produtos from "components/Produtos/Produtos";
import MenuIcons from "components/MenuIcons/MenuIcons";

export default function Main() {
     return (
          <main className="max-w-6xl mx-auto  space-y-10">
               <Banner />
               < MenuIcons />
               <Produtos />
          </main>
     )
}