import products from '../../public/db/dietDb.ts'





const getCategory = function (categoryName: string) {

    return products.filter(
         (p) => p.category === categoryName)
         .sort((a, b) => {
             if (a.name < b.name)
             return - 1;
             if (a.name > b.name)
             return 1;
 
             return 0;
         }
     )
 }

 const cukry = getCategory('Cukry')
// const [cukry, setCukry] = useState(getCategory('Cukry'));
const dodatki = getCategory('Dodatki')
const mieso = getCategory('Mięso')
const nabial = getCategory('Nabiał')
const napoje = getCategory('Napoje')
const orzechy = getCategory('Orzechy')
const owoce = getCategory('Owoce')
const warzywa = getCategory('Warzywa')
const zboza = getCategory('Zboża')

export const sortedByFodmap = [ owoce, warzywa, mieso, zboza, nabial, orzechy, cukry, napoje, dodatki ];





const getHistamineTier = function (tier: string) {

    return products.filter(
         (p) => p.histamine === tier)
         .sort((a, b) => {
             if (a.name < b.name)
             return - 1;
             if (a.name > b.name)
             return 1;
 
             return 0;
         }
     )
 }

 const lowTier: any = getHistamineTier('20%');
 const midTier = getHistamineTier('20-60%');
 const highTier = getHistamineTier('>60%');


export const sortedByHistamine = [ lowTier, midTier, highTier ];

