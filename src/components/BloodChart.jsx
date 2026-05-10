"use client";

import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
} from "@heroui/react";

const compatibility = [
    {
        id: 1,
        group: "O-",
        canGiveTo: "All",
        canReceiveFrom: "O-",
    },
    {
        id: 2,
        group: "O+",
        canGiveTo: "O+, A+, B+, AB+",
        canReceiveFrom: "O+, O-",
    },
    {
        id: 3,
        group: "A-",
        canGiveTo: "A-, A+, AB-, AB+",
        canReceiveFrom: "A-, O-",
    },
    {
        id: 4,
        group: "A+",
        canGiveTo: "A+, AB+",
        canReceiveFrom: "A+, A-, O+, O-",
    },
    {
        id: 5,
        group: "B-",
        canGiveTo: "B-, B+, AB-, AB+",
        canReceiveFrom: "B-, O-",
    },
    {
        id: 6,
        group: "B+",
        canGiveTo: "B+, AB+",
        canReceiveFrom: "B+, B-, O+, O-",
    },
    {
        id: 7,
        group: "AB-",
        canGiveTo: "AB-, AB+",
        canReceiveFrom: "A-, B-, O-, AB-",
    },
    {
        id: 8,
        group: "AB+",
        canGiveTo: "AB+",
        canReceiveFrom: "All",
    },
];

const BloodChart = () => {
    return (
        <section className="bg-[#faf6f7] py-20">
            <div className="mx-auto container px-4">

                <div className="text-center">
                    <h2 className="text-5xl font-bold text-[#1b0b0b]">
                        Blood Group Compatibility
                    </h2>

                    <p className="mt-4 text-lg text-[#8b6f6f]">
                        Know who you can give to and receive from.
                    </p>
                </div>

                <div className="mt-14 overflow-hidden rounded-3xl border border-[#f2e7e7] bg-white">

                    <Table aria-label="Blood compatibility table" className={'w-full'}>
                        <Table.Content>
                            <TableHeader className={'bg-red-50 '}>
                                <TableColumn isRowHeader className={'text-lg text-black'}>Blood Group</TableColumn>
                                <TableColumn className={'text-lg text-black'}>Can Give To</TableColumn>
                                <TableColumn className={'text-lg text-black'}>Can Receive From</TableColumn>
                            </TableHeader>

                            <TableBody>
                                {compatibility.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Chip
                                                radius="full"
                                                color="danger"
                                                classNames={{
                                                    base: "bg-red-500 h-9 px-3",
                                                    content: "text-white font-semibold",

                                                }}
                                            >
                                                {item.group}
                                            </Chip>
                                        </TableCell>

                                        <TableCell><span className="text-muted">{item.canGiveTo}</span></TableCell>

                                        <TableCell><span className="text-muted">{item.canReceiveFrom}</span></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table.Content>
                    </Table>

                </div>
            </div>
        </section>
    );
};

export default BloodChart;