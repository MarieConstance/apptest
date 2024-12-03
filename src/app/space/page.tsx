'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState<any[]>([]);

    const fetchdata = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products', {
                method: "GET",
               
            });
            const data = await response.json();
            console.log('Fetched products:', data.products); // Données reçues de l'API
            setProducts(data.products); // Met à jour l'état avec les produits
            console.log(products);
            
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        fetchdata();  
    }, []);
          
  return (
     <>
         <span>BIENVEVUE SUR SPACE</span>
        <button><Link href={'/'}>aller</Link></button>
         {/* Affichage des produits */}
         <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
     </>
  );
}
