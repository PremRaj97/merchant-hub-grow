import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bike, Printer, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import {
  cancelReasons,
  inr,
  seedOrders,
  stateFlow,
  stateLabel,
  type Order,
  type OrderState,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Live Orders — Spice Route Partner Portal" },
      {
        name: "description",
        content:
          "Accept or reject incoming orders, set prep time, track riders to the store and manage cancellations with reason codes.",
      },
      { property: "og:title", content: "Live Orders — Spice Route Partner Portal" },
      {
        property: "og:description",
        content: "Incoming order queue with prep-time selection, rider ETA and auto-accept rules.",
      },
    ],
  }),
  component: LiveOrders;
});

function LiveOrders() {
  return null;
}
