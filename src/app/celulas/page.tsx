import { Header } from "@/components/all/Header";
import { Input } from "@/components/all/Input";
import { Select } from "@/components/all/Select";
import { Wrapper } from "@/components/all/Wrapper";
import { Main } from "@/components/celulas/Main";

export default function Celulas() {
    return(
        <>
            <section className="relative h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 z-50 w-full">
                    <Header />
                </div>
            
                <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                >
                    <source src="/assets/video1.mp4" type="video/mp4" />
                </video>
        
                <div className="absolute inset-0 bg-[#050505]/40 z-1" />
        
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#050505] z-2" />
        
                {/* MAIN SECTION */}

                <Main />
            </section>


            <Wrapper>
                {/* Content */}
                <section className="w-full mt-10">
                
                    {/* FILTERS */}
                    <div className="w-full flex justify-between">
                        <div className="max-w-1/3 w-full">
                            <Input 
                            placeholder="Nome da célula"
                            type="text" />
                        </div>

                        <div className="max-w-1/3 w-full flex gap-4">
                            <Select>
                                <option className="bg-[#131415]" value="">Todas as regiões</option>
                                <option className="bg-[#131415]" value="norte">Norte</option>
                                <option className="bg-[#131415]" value="sul">Sul</option>
                                <option className="bg-[#131415]" value="leste">Leste</option>
                                <option className="bg-[#131415]" value="oeste">Oeste</option>
                            </Select>

                            <Select>
                                <option className="bg-[#131415]" value="">Todas as regiões</option>
                                <option className="bg-[#131415]" value="norte">Norte</option>
                                <option className="bg-[#131415]" value="sul">Sul</option>
                                <option className="bg-[#131415]" value="leste">Leste</option>
                                <option className="bg-[#131415]" value="oeste">Oeste</option>
                            </Select>
                        </div>
                    </div>            
                </section>
            </Wrapper>
        </>
    )
}