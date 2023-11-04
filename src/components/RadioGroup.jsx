import { RadioGroup } from "@headlessui/react";

export default function Radio({ plans, selected, setSelected }) {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-2">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={`${
              selected.name === plan.name ? "bg-accent text-white" : "bg-white"
            } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
          >
            <>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium  ${
                        selected.name === plan.name
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={`inline ${
                        selected.name === plan.name
                          ? "text-gray-100"
                          : "text-gray-500"
                      }`}
                    >
                      <span>
                        {plan.ram}/{plan.cpus}
                      </span>{" "}
                      <span aria-hidden="true">&middot;</span>{" "}
                      <span>{plan.disk}</span>
                    </RadioGroup.Description>
                  </div>
                </div>
                {selected.name === plan.name && (
                  <div className="shrink-0 text-white">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                )}
              </div>
            </>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
