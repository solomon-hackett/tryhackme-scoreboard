"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { createPortal } from "react-dom";
import { deletePerson } from "@/app/lib/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);

  function handleDelete(id: string) {
    deletePerson(id);
    setShowConfirm(false);
  }

  return (
    <>
      <button
        className="px-1 py-1 rounded-md cursor-pointer liquid-glass"
        onClick={() => setShowConfirm(true)}
      >
        <TrashIcon className="w-7 h-7" />
      </button>

      {showConfirm &&
        createPortal(
          <div
            className="z-9999 fixed inset-0 flex justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={() => setShowConfirm(false)}
          >
            <div
              className="flex flex-col gap-6 p-8 rounded-2xl w-96 liquid-glass"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="p-4 rounded-full liquid-glass">
                  <TrashIcon className="w-8 h-8 text-green-300" />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 text-center">
                <h2 className="font-bold text-green-300 text-2xl">
                  Are you sure?
                </h2>
                <p className="text-green-300/60 text-sm">
                  This action cannot be undone.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 hover:opacity-80 py-2 rounded-xl font-semibold text-green-300 text-sm transition-opacity cursor-pointer liquid-glass"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(239,68,68,0.4) 0%, rgba(239,68,68,0.2) 100%)",
                    border: "1px solid rgba(239,68,68,0.5)",
                    color: "rgb(252,165,165)",
                    boxShadow: deleteHovered
                      ? "0 20px 60px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(239,68,68,0.35), inset 0 -1px 0 rgba(239,68,68,0.08)"
                      : "inset 0 1px 0 rgba(239,68,68,0.3)",
                    transform: deleteHovered
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  }}
                  onMouseEnter={() => setDeleteHovered(true)}
                  onMouseLeave={() => setDeleteHovered(false)}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
