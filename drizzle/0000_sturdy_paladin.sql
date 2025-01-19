CREATE TABLE "Costs" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"milk_cost_per_liter" real NOT NULL,
	"gas_cost_per_unit" real NOT NULL,
	"electricity_cost_per_kwh" real NOT NULL,
	"staff_wage_per_hour" real NOT NULL,
	"electricity_vat" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Equipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"equipment_name" text NOT NULL,
	"production_volume" real NOT NULL,
	"start_time" text NOT NULL,
	"end_time" text NOT NULL,
	"total_time" real NOT NULL,
	"efficiency" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Inputs" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"volume_of_milk" integer NOT NULL,
	"gas_usage" integer NOT NULL,
	"electricity_usage" integer NOT NULL,
	"staff_count" integer NOT NULL,
	"staff_hours" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Outputs" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"total_milk_cost" real NOT NULL,
	"total_gas_cost" real NOT NULL,
	"total_staff_cost" real NOT NULL,
	"total_electricity_cost" real NOT NULL,
	"total_production_cost" real NOT NULL,
	"output_weight" real NOT NULL,
	"cost_per_kg" real NOT NULL
);
