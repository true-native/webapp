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
        productSub
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
                sub: productSub
			}
		)
		response = newProductRef;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response)
}

/*

export async function POST(request: Request): Promise<Response> {
	const { description, imageUrl, created, authorName, authorEmail, authorId } = await request.json() as Maintenance;
	const newMaintenance = { description, imageUrl, created, authorName, authorEmail, authorId };
	let response = null;

	try {
		const newMaintenanceRef = doc(collection(db, "maintenance"))
		await setDoc(
			newMaintenanceRef, {
				uid: newMaintenanceRef.id,
				description: newMaintenance.description,
				created: newMaintenance.created,
				imageUrl: newMaintenance.imageUrl,
				authorName: newMaintenance.authorName,
				authorEmail: newMaintenance.authorEmail,
				authorId: newMaintenance.authorId
			}
		)
		response = newMaintenanceRef;
	} catch (error) {
		response = {success: false, message: "Could not create maintenance"}
	}

	return NextResponse.json(response)
}

*/
