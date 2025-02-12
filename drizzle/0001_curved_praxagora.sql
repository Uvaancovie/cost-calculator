CREATE TABLE "daily_production" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"milk_cost" real NOT NULL,
	"gas_cost" real NOT NULL,
	"staff_cost" real NOT NULL,
	"electricity_cost" real NOT NULL,
	"total_cost" real NOT NULL,
	"output_weight" real NOT NULL,
	"cost_per_kg" real NOT NULL,
	"total_milk_volume" real NOT NULL,
	"total_production_output" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "InsurancePolicies" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"policy_type" text NOT NULL,
	"insured_amount" real NOT NULL,
	"monthly_premium" real NOT NULL,
	"duration_months" real NOT NULL,
	"projected_growth" real NOT NULL,
	"future_value" real NOT NULL
);
