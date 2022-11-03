import bannerPrincipal from "../../assets/img/relogio.png";
import bannerSecundario from "../../assets/img/banner-2.png";
import bannerTernario from "../../assets/img/promocao.png";



export default function Banner() {
     return (
          <section>
               <div className="drop-shadow-lg">
                    <div className="h-60">
                         <img className="w-full h-full" src={bannerSecundario} alt="banner-promocao" />
                    </div>
               </div>
          </section>
     )
}