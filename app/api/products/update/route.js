import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	let response = null;

    const { data } = await req.json()

    if (!data) return NextResponse.json({ status: 500, message: 'Missing data'});

	try {
        const updatedProductRef = doc(db, "products", data.productId)

		await updateDoc(updatedProductRef, {
            pid: data.productId,
            card_text: data.productCardText,
            category: data.productCategory,
            certifications: data.productCertifications,
            description: data.productDescription,
            featured: data.productFeatured,
            image_full: data.productImageFull,
            image_thumb: data.productImageThumb,
            ingredients: data.productIngredients,
            name: data.productName,
            new: data.productNew,
            page_title: data.productPageTitle,
            sizes: data.productSizes,
            sub: data.productSub,
            sku: data.productSku,
            status: data.productStatus
        })

		response = { status: 200, message: 'Product Updated' };
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}