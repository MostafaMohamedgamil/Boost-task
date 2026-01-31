import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { RoleService } from './role.service';

export interface AdminData {
  id: number;
  name: string;
  phone: string;
  website: string;
}

export interface InstructorData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserData {
  id: number;
  category: string;
  description: string;
  title: string;
  price: number;
  image: string;
}
type DataType = AdminData[] | InstructorData[] | UserData[];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = signal<DataType | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private roleService: RoleService,
  ) {}

  fetchData() {
    const role = this.roleService.getRole();
    this.loading.set(true);
    this.error.set(null);

    let api = '';

    switch (role) {
      case 'Admin':
        api = 'https://jsonplaceholder.typicode.com/users';
        break;
      case 'Instructor':
        api = 'https://jsonplaceholder.typicode.com/posts';
        break;
      case 'User':
        api = 'https://fakestoreapi.com/products';
        break;
    }

    this.http.get<DataType>(api).subscribe({
      next: (res: DataType) => {
        console.log("data fetched:", res);
        this.data.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load data');
        this.loading.set(false);
      },
    });
  }
}
