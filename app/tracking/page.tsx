'use client';

import { useState } from 'react';

const statusSteps = [
  { name: 'Booked', date: '12 Jun 09:20', active: true },
  { name: 'Picked up', date: '12 Jun 10:05', active: false },
  { name: 'In transit', date: '12 Jun 12:40', active: false },
  { name: 'Out for delivery', date: 'Expected 16:30', active: false },
  { name: 'Delivered', date: 'Pending', active: false },
];

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('BZN-2048');

  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Tracking</p>
          <h1 className="section-title mt-4">Track your shipment or premium transfer in real time.</h1>
        </div>

        <div className="soft-card p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <input
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking ID"
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-slate-800 focus:border-navy focus:outline-none md:max-w-md"
            />
            <button className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Track now</button>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-navy p-8 text-white shadow-luxury md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF6D]">Current order</p>
              <h2 className="mt-3 text-3xl font-black">{trackingId}</h2>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.15em] text-[#D4AF6D]">
              In transit
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {statusSteps.map((step) => (
              <div key={step.name} className={`rounded-2xl border p-4 ${step.active ? 'border-[#D4AF6D] bg-[#D4AF6D]/10' : 'border-white/15 bg-white/5'}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{step.name}</p>
                <p className="mt-3 text-sm font-medium text-white">{step.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
