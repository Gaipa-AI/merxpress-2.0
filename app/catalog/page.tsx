import { NavList } from "@/components/NavList";
import { Catalog } from "@/components/Catalog";
import { MerxLayout } from "@/components/merxDash";
import Pagination from '@/app/ui/pagination'
import { fetchInvoicesPages } from '@/lib/data';


export default async function Sell(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    totalpages?:number;
  }>;
}){
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);

    return(
        <div> 
            <NavList/>
            <MerxLayout>
            <Pagination totalPages={totalPages} />
            <Catalog query={query} currentPage={currentPage} /> 
            </MerxLayout>
        </div>
    )

}