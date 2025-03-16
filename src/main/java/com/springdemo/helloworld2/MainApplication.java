package com.springdemo.helloworld2;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import com.springdemo.helloworld2.entity.Task;
import com.springdemo.helloworld2.repository.TaskRepository;

@SpringBootApplication
public class MainApplication implements CommandLineRunner {

    private final DataSource dataSource;
    private final TaskRepository taskRepository;

    public MainApplication(DataSource dataSource, TaskRepository taskRepository) {
        this.dataSource = dataSource;
        this.taskRepository = taskRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        try (Connection connection = dataSource.getConnection()) {
            DatabaseMetaData metaData = connection.getMetaData();
            ResultSet tables = metaData.getTables("task_manager", null, "%", new String[]{"TABLE"});
            
            System.out.println("\nTables in task_manager database:");
            while (tables.next()) {
                String tableName = tables.getString("TABLE_NAME");
                System.out.println("- " + tableName);
            }
        }

        System.out.println("\nTasks in database:");
        for (Task task : taskRepository.findAll()) {
            System.out.println("- " + task.getTitle() + " (ID: " + task.getId() + ")");
        }
    }
}
