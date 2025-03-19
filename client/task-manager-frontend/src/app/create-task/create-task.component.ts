import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule]
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      status: ['pending']
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value).subscribe({
        next: () => {
          this.dialogRef.close(true);
          window.location.reload();
        },
        error: (err) => console.error('Error creating task:', err)
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
} 