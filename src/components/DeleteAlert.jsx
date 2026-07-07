"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export function DeleteAlert({ alertData, endpoint }) {

    const [facility, setFacility] = useState({});

    const router = useRouter();

    const loadFacility = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allfacilities/${alertData.facility_id}`);

        const data = await res.json();
        setFacility(data);

    }

    const handleDelete = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${endpoint}/${alertData._id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });

        const data = await res.json();

        console.log(data)

        if (data.deletedCount > 0) {
            toast("Booking Cancelled Successfully!");
            router.refresh();
        }
    }



    return (
        <AlertDialog>
            <Button onClick={loadFacility} variant="danger">Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>"{alertData.name || facility.name}"</strong> entry
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="text-black" >
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}