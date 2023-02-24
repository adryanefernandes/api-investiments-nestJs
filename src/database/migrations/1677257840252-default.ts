import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677257840252 implements MigrationInterface {
    name = 'default1677257840252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`uuid_user\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(14) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(14) NULL, \`tellphone\` varchar(14) NULL, \`status\` enum ('0', '1', '2', '3') NOT NULL DEFAULT '0', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_c1b20b2a1883ed106c3e746c25\` (\`document\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id_user\`, \`uuid_user\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_c1b20b2a1883ed106c3e746c25\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
