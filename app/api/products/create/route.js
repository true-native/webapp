import { collection,doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(request) {
	const {
        productCardText,
        productCategory,
        productCertifications,
        productDescription,
        productFeatured,
        productImageFull,
        productImageThumb,
        productIngredients,
        productName,
        productNew,
        productPageTitle,
        productSizes,
        productSub,
        productSku
    } = await request.json();

	let response = null;

	try {
		const newProductRef = doc(collection(db, "products"))
		await setDoc(
			newProductRef, {
				pid: newProductRef.id,
				card_text: productCardText,
                category: productCategory,
                certifications: productCertifications,
                description: productDescription,
                featured: productFeatured,
                image_full: productImageFull,
                image_thumb: productImageThumb,
                ingredients: productIngredients,
                name: productName,
                new: productNew,
                page_title: productPageTitle,
                sizes: productSizes,
                sub: productSub,
                sku: productSku,
                status: 'active'
			}
		)
		response = newProductRef;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response)
}

