import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Contacts")
export class Contact {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column("varchar")
    name?: string;

    @Column("varchar")
    number?: string;

    @Column("date")
    birthday?: string;

}