import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { StaticColumnComponent } from './components/static-column/static-column.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { GridComponent } from './components/grid/grid.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/filter.pipe';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    StaticColumnComponent,
    BalanceCardComponent,
    GridComponent,
    HistoryTableComponent,
    TableComponent,
    SearchPipe,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
