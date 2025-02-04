import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews, getAvailableNewsMonths, getAvailableNewsYears, getLatestNews, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let data;

  if (req.nextUrl.searchParams.has("limit")) {
    // jika ada searchparams limit, dapetin news bedasarkan limit
    const limit = Number(req.nextUrl.searchParams.get("limit"));

    limit > 5 ? (data = await getLatestNews(5)) : (data = await getLatestNews(limit));

  } else if (req.nextUrl.searchParams.get("list") === "year") {
    // jika ada searchparams list yanng valuenya year, dapetin list year

    data = await getAvailableNewsYears();

  } else if (req.nextUrl.searchParams.get("list") === "month" && req.nextUrl.searchParams.has("year")) {
    // jika ada searchparams list yanng valuenya month dan ada searchparams year, dapetin list bulan berdasarkan tahun

    const year = req.nextUrl.searchParams.get("year") as string;
    console.log(year);

    data = await getAvailableNewsMonths(year);

  } else if (req.nextUrl.searchParams.has("year") && req.nextUrl.searchParams.has("month")) {
    // jika ada searchparams year & month, dapetin news by year & month
    const year = req.nextUrl.searchParams.get("year") as string;
    const month = req.nextUrl.searchParams.get("month") as string;

    data = await getNewsForYearAndMonth(year, month);

  } else if (req.nextUrl.searchParams.has("year")) {
    // jika ada searchparams year, dapetin news by year
    const year = req.nextUrl.searchParams.get("year") as string;

    data = await getNewsForYear(year);

  } else {
    data = await getAllNews();
  }

  try {
    
    return NextResponse.json({ message: "success", data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
