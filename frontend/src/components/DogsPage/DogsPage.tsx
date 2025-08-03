
// import DogsCart from "./DogsCart";
// import "./dogs.css"

// const DogsPage = ({ allDogs }) => {
//   return (
//     <>
//       <section className="dogs-container">
//         {allDogs.map((dog) => {
//           return (
//             <div key={dog.id}>
//               <DogsCart
//                 key={dog.id}
//                 name={dog.name}
//                 breed={dog.breed}
//                 description={dog.description}
//                 price={dog.price}
//                 imageUrl={dog.imageUrl}
//               />
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export default DogsPage;
import DogsCart from "./DogsCart";
import "./dogs.css";

// ✅ Khai báo kiểu Dog
interface Dog {
  id?: number;
  name: string;
  breed: string;
  description: string;
  price: number;
  imageUrl: string;
}

// ✅ Khai báo props cho component
interface DogsPageProps {
  allDogs: Dog[];
}

const DogsPage = ({ allDogs }: DogsPageProps) => {
  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog: Dog) => {
          return (
            <div key={dog.id}>
              <DogsCart
                key={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                price={dog.price}
                imageUrl={dog.imageUrl}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DogsPage;
