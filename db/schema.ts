import { pgTable, serial, integer, real, date, text } from "drizzle-orm/pg-core";

// 1. Insurance Policies Table
export const insurancePolicies = pgTable("InsurancePolicies", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  policy_type: text("policy_type").notNull(), // e.g., "Motor Vehicle Insurance"
  insured_amount: real("insured_amount").notNull(), // Amount insured
  monthly_premium: real("monthly_premium").notNull(), // Premium paid per month
  duration_months: real("duration_months").notNull(), // Policy duration in months
  projected_growth: real("projected_growth").notNull(), // Expected growth %
  future_value: real("future_value").notNull(), // Predicted future value
});

// 2. Inputs Table
export const inputs = pgTable("Inputs", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  volume_of_milk: integer("volume_of_milk").notNull(),
  gas_usage: integer("gas_usage").notNull(),
  electricity_usage: integer("electricity_usage").notNull(),
  staff_count: integer("staff_count").notNull(),
  staff_hours: real("staff_hours").notNull(),
});

// 3. Costs Table
export const costs = pgTable("Costs", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  milk_cost_per_liter: real("milk_cost_per_liter").notNull(),
  gas_cost_per_unit: real("gas_cost_per_unit").notNull(),
  electricity_cost_per_kwh: real("electricity_cost_per_kwh").notNull(),
  staff_wage_per_hour: real("staff_wage_per_hour").notNull(),
  electricity_vat: real("electricity_vat").notNull(),
});

// 4. Outputs Table
export const outputs = pgTable("Outputs", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  total_milk_cost: real("total_milk_cost").notNull(),
  total_gas_cost: real("total_gas_cost").notNull(),
  total_staff_cost: real("total_staff_cost").notNull(),
  total_electricity_cost: real("total_electricity_cost").notNull(),
  total_production_cost: real("total_production_cost").notNull(),
  output_weight: real("output_weight").notNull(),
  cost_per_kg: real("cost_per_kg").notNull(),
});

// 5. Equipment Table
export const equipment = pgTable("Equipment", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  equipment_name: text("equipment_name").notNull(),
  production_volume: real("production_volume").notNull(),
  start_time: text("start_time").notNull(),
  end_time: text("end_time").notNull(),
  total_time: real("total_time").notNull(),
  efficiency: real("efficiency").notNull(),
});

// 6. Daily Production Table
export const dailyProduction = pgTable("daily_production", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  milk_cost: real("milk_cost").notNull(),
  gas_cost: real("gas_cost").notNull(),
  staff_cost: real("staff_cost").notNull(),
  electricity_cost: real("electricity_cost").notNull(),
  total_cost: real("total_cost").notNull(),
  output_weight: real("output_weight").notNull(),
  cost_per_kg: real("cost_per_kg").notNull(),
  total_milk_volume: real("total_milk_volume").notNull(),
  total_production_output: real("total_production_output").notNull(),
});
