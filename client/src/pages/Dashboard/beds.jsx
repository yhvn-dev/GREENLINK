import { Droplet, Activity } from "lucide-react";

export function Bed_1({ bedNum = "bed_1" }) {

  
  // Sample sensor data (you can replace this with real data later)
  const sensorData = {
    bed_1: [
      { zone: "A1", moisture: 65, ph: 6.5 },
      { zone: "A2", moisture: 72, ph: 6.8 },
      { zone: "A3", moisture: 58, ph: 6.3 },
      { zone: "A4", moisture: 68, ph: 6.7 },
      { zone: "A5", moisture: 75, ph: 7.0 },
      { zone: "A6", moisture: 62, ph: 6.4 },
    ],
  };




  const BedLayout = ({ bedData }) => (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-max px-6 py-8">
        {/* Bed Container */}
        <div
          className="relative rounded-xl p-6 shadow-lg"
          style={{
            backgroundColor: "var(--sage-lighter)",
            border: "2px solid var(--sage-light)",
          }}
        >
          {/* Bed Header */}
          <div className="mb-6 flex items-center justify-between">
            <h3
              className="text-sm font-semibold tracking-wide"
              style={{ color: "var(--sancga)" }}
            >
              BED 1 - MONITORING
            </h3>
            <div
              className="text-sm px-3 py-1 rounded-full"
              style={{
                backgroundColor: "var(--sage-medium)",
                color: "var(--sage-dark)",
              }}
            >
              {bedData.length} Zones Active
            </div>
          </div>



          {/* Sensor Grid ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== */}
          <div className="grid grid-cols-6 gap-4">
            {bedData.map((sensor, index) => (
              <div
                key={index}
                className="relative rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--sage-light)",
                }}
              >
                {/* Zone Label */}
                <div
                  className="absolute -top-3 left-3 px-2 py-1 rounded text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--sancgb)",
                    color: "white",
                  }}
                >
                  {sensor.zone}
                </div>

                {/* Sensor Readings */}
                <div className="mt-4 space-y-3">
                  {/* Moisture */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Droplet size={14} style={{ color: "var(--sancgb)" }} />
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--acc-darka)" }}
                      >
                        Moisture
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--sancgb)" }}
                      >
                        {sensor.moisture}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--acc-darkb)" }}
                      >
                        %
                      </span>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--sage-lighter)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${sensor.moisture}%`,
                          backgroundColor: "var(--sancgb)",
                        }}
                      />
                    </div>
                  </div>

                  {/* pH Level  ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== */} 
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Activity size={14} style={{ color: "var(--sancgd)" }} />
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--acc-darka)" }}
                      >
                        pH Level
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--sancgd)" }}
                      >
                        {sensor.ph}
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(14)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-1.5 rounded-sm"
                          style={{
                            backgroundColor:
                              i < Math.round(sensor.ph)
                                ? "var(--sancgd)"
                                : "var(--sage-lighter)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div
                  className="mt-3 pt-3 border-t"
                  style={{ borderColor: "var(--sage-light)" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm"
                      style={{ color: "var(--acc-darkc)" }}
                    >
                      Status
                    </span>
                    <div className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            sensor.moisture > 60
                              ? "var(--sancgc)"
                              : "#f59e0b",
                        }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{
                          color:
                            sensor.moisture > 60
                              ? "var(--sage-dark)"
                              : "#f59e0b",
                        }}
                      >
                        {sensor.moisture > 60 ? "Optimal" : "Low"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bed Footer */}
          <div
            className="mt-6 pt-4 border-t"
            style={{ borderColor: "var(--sage-light)" }}
          >
            <div
              className="h-3 rounded-full"
              style={{
                backgroundColor: "var(--sage-dark)",
                opacity: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
        <div
          className="rounded-xl overflow-hidden w-full">
          <BedLayout bedData={sensorData[bedNum]} />
        </div>
    </>
  );





  
}

export function Bed_2() {
  return (
    <div className="p-6 text-center text-[var(--acc-darka)]">
      <h2 className="text-xl font-semibold mb-2">Bed 2 Monitoring</h2>
      <p>Data visualization for Bed 2 will appear here soon.</p>
    </div>
  );
}

export function Bed_3() {
  return (
    <div className="p-6 text-center text-[var(--acc-darka)]">
      <h2 className="text-xl font-semibold mb-2">Bed 3 Monitoring</h2>
      <p>Data visualization for Bed 3 will appear here soon.</p>
    </div>
  );
}

