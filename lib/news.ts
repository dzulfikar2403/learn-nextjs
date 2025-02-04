import { DUMMY_NEWS } from "@/dummy-news";
import { query } from "./db";

export async function getAllNews() {
  const res = await query(`select * from news`, []);

  return res.rows;
}

export async function getLatestNews(limit: number) {
  const res = await query(`select * from news limit $1`, [limit]);

  return res.rows;
}

export async function getAvailableNewsYears() {
  const res = await query("select distinct to_char(\"date\"::date,'YYYY') tahun from news order by to_char(\"date\"::date,'YYYY') desc", []);
  // await new Promise((resolve) => setTimeout( resolve, 2000));
  return res.rows.map((el) => el.tahun);
}

export async function getAvailableNewsMonths(year: string) {
  const res = await query("select distinct trim(to_char(\"date\"::date,'month')) bulan from news where (to_char(\"date\"::date,'YYYY')) = $1 order by trim(to_char(\"date\"::date,'month')) desc", [year]);

  return res.rows.map((el) => el.bulan);
}

export async function getNewsForYear(year: string) {
  const res = await query("select * from news where (to_char(\"date\"::date,'YYYY')) = $1", [year]);

  return res.rows;
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  const res = await query("select * from news where (to_char(\"date\"::date,'YYYY')) = $1 and (trim(to_char(\"date\"::date,'month'))) = $2", [year, month]);

  return res.rows;
}
