import ItemList from "./item-list";
import Item from "./item";

export default function ItemListPage() {
    return(
        <main>
            <div>
            <ItemList ItemObj={item1}/>
            <p>Hello</p>
            </div>
        </main>
    );
}