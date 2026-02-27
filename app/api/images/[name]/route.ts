import { NextRequest, NextResponse } from "next/server";

const imageUrls: Record<string, string> = {
  nahom:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173967/nahom_a6ltip.jpg",
  rediet:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173960/rediet_zhwvyk.jpg",
  michael:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173951/michael_y5n14z.jpg",
  melkie:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173949/melkie_pnd71m.jpg",
  leul: "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173949/leul_ysbuh4.jpg",
  melakeselam:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173929/melakeselam_ai7kvd.jpg",
  dagmawi:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173921/dagmawi_srqnnk.jpg",
  mailaf:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173908/mailaf_y08wfg.jpg",
  kaleab:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772191781/kaleab_eagrxu.jpg",
  abraham:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173870/abraham_r7ew4q.jpg",
  yared:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173867/yared_xcxtlq.jpg",
  eyuel:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173854/eyuel_fdqrxk.jpg",
  duresa:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173846/duresa_tf7okr.jpg",
  adnan:
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772173852/adnan_jbcgua.jpg",
  nesredin: 
    "https://res.cloudinary.com/dwmyfq2fw/image/upload/v1772191622/nesredin_pobwmc.jpg"
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const url = imageUrls[name];

  if (!url) {
    return new NextResponse("Image not found", { status: 404 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const buffer = await response.arrayBuffer();
    const headers = new Headers();
    headers.set(
      "Content-Type",
      response.headers.get("Content-Type") || "image/jpeg",
    );
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
